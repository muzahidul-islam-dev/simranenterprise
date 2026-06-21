"use client";

import { useRef, useState } from "react";
import { Eye, EyeOff, Loader2, CheckCircle, Camera } from "lucide-react";
import { useSession } from "next-auth/react";
import { useHttp } from "@/hooks/useHttp";
import { COUNTRY_NAMES } from "@/lib/countries";
import type { CustomerProfile } from "@/types/auth";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string | null;
  customerProfile?: CustomerProfile;
  apiToken: string;
}

export default function ProfileView({ firstName, lastName, email, phone, avatar, customerProfile, apiToken }: Props) {
  const { update } = useSession();
  const { put, post, postForm, isLoading } = useHttp();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(avatar);
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [avatarError, setAvatarError] = useState<string | null>(null);
  const [avatarSuccess, setAvatarSuccess] = useState(false);

  const [profile, setProfile] = useState({
    first_name: firstName,
    last_name: lastName,
    phone: phone,
    country: customerProfile?.country ?? "",
    address: customerProfile?.address ?? "",
  });
  const [profileSuccess, setProfileSuccess] = useState(false);
  const [profileError, setProfileError] = useState<string | null>(null);

  const [passwords, setPasswords] = useState({ current_password: "", password: "", password_confirmation: "" });
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const initials = `${firstName[0] ?? ""}${lastName[0] ?? ""}`.toUpperCase();
  const displayAvatar = previewUrl ?? avatarUrl;

  function handleAvatarSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      setAvatarError("Image must be smaller than 2MB.");
      return;
    }
    setAvatarError(null);
    setPendingFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleCancelPreview() {
    setPendingFile(null);
    setPreviewUrl(null);
    setAvatarError(null);
  }

  async function handleAvatarSave() {
    if (!pendingFile) return;
    setAvatarUploading(true);
    setAvatarError(null);
    setAvatarSuccess(false);
    const fd = new FormData();
    fd.append("avatar", pendingFile);
    try {
      const res = await postForm<{ avatar_url: string }>("/api/customer/profile/avatar", fd, { token: apiToken });
      setAvatarUrl(res.avatar_url);
      setPendingFile(null);
      setPreviewUrl(null);
      setAvatarSuccess(true);
      setTimeout(() => setAvatarSuccess(false), 3000);
      await update({ avatar: res.avatar_url });
    } catch (err) {
      setAvatarError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setAvatarUploading(false);
    }
  }


  async function handleProfileSubmit(e: React.FormEvent) {
    e.preventDefault();
    setProfileSuccess(false);
    setProfileError(null);
    if (!profile.country) {
      setProfileError("Please select a country.");
      return;
    }
    try {
      await put("/api/customer/profile", profile, { token: apiToken });
      setProfileSuccess(true);
      setTimeout(() => setProfileSuccess(false), 3000);
      await update({ first_name: profile.first_name, last_name: profile.last_name, phone: profile.phone });
    } catch (err) {
      setProfileError(err instanceof Error ? err.message : "Failed to update profile.");
    }
  }

  async function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPasswordSuccess(false);
    setPasswordError(null);
    if (passwords.password !== passwords.password_confirmation) {
      setPasswordError("New passwords do not match.");
      return;
    }
    try {
      await post("/api/customer/profile/change-password", passwords, { token: apiToken });
      setPasswordSuccess(true);
      setPasswords({ current_password: "", password: "", password_confirmation: "" });
      setTimeout(() => setPasswordSuccess(false), 3000);
    } catch (err) {
      setPasswordError(err instanceof Error ? err.message : "Failed to change password.");
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">My Profile</h2>
        <p className="text-sm text-gray-500 mt-1">Update your personal information and change your password.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 items-start">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center">
          <div className="relative mb-3">
            {displayAvatar ? (
              <img src={displayAvatar} alt={firstName} className="w-24 h-24 rounded-full object-cover ring-4 ring-[#1B4FD8]/20" />
            ) : (
              <div className="w-24 h-24 rounded-full bg-[#1B4FD8] flex items-center justify-center text-white text-3xl font-bold ring-4 ring-[#1B4FD8]/20">
                {initials}
              </div>
            )}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={avatarUploading}
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#1B4FD8] border-2 border-white flex items-center justify-center text-white hover:bg-[#1640b0] transition-colors disabled:opacity-50"
              title="Change photo"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
            <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="hidden" onChange={handleAvatarSelect} />
          </div>

          {/* Save / Cancel shown only after selecting a new photo */}
          {pendingFile && (
            <div className="flex gap-2 mb-3 w-full">
              <button
                type="button"
                onClick={handleAvatarSave}
                disabled={avatarUploading}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#1B4FD8] hover:bg-[#1640b0] disabled:opacity-60 text-white text-xs font-semibold transition-colors"
              >
                {avatarUploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
                {avatarUploading ? "Saving…" : "Save Photo"}
              </button>
              <button
                type="button"
                onClick={handleCancelPreview}
                disabled={avatarUploading}
                className="flex-1 px-3 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-60"
              >
                Cancel
              </button>
            </div>
          )}

          {avatarSuccess && (
            <div className="flex items-center gap-1.5 text-xs text-green-600 mb-2">
              <CheckCircle className="w-3.5 h-3.5" /> Photo updated!
            </div>
          )}
          {avatarError && <p className="text-xs text-red-500 mb-1">{avatarError}</p>}
          <p className="text-xs text-gray-400 mb-3">JPG, PNG, WebP · Max 2MB</p>
          <h3 className="text-base font-bold text-gray-900">{firstName} {lastName}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{email}</p>
          <span className="mt-3 inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#1B4FD8]/10 text-[#1B4FD8]">Customer</span>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="text-sm font-bold text-gray-900 mb-5">Personal Information</h3>
            {profileSuccess && (
              <div className="mb-4 flex items-center gap-2 px-4 py-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm">
                <CheckCircle className="w-4 h-4" /> Profile updated successfully.
              </div>
            )}
            {profileError && (
              <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">{profileError}</div>
            )}
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="First Name" value={profile.first_name} onChange={(v) => setProfile((p) => ({ ...p, first_name: v }))} />
                <Field label="Last Name" value={profile.last_name} onChange={(v) => setProfile((p) => ({ ...p, last_name: v }))} />
              </div>
              <Field label="Phone Number" value={profile.phone} onChange={(v) => setProfile((p) => ({ ...p, phone: v }))} type="tel" />
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1.5">Email Address</label>
                <input value={email} disabled className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-400 text-sm cursor-not-allowed" />
                <p className="text-xs text-gray-400 mt-1">Email cannot be changed.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Country</label>
                  <select value={profile.country} onChange={(e) => setProfile((p) => ({ ...p, country: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 bg-white outline-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/20 transition">
                    <option value="">Select country</option>
                    {COUNTRY_NAMES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <Field label="Address" value={profile.address} onChange={(v) => setProfile((p) => ({ ...p, address: v }))} placeholder="Optional" />
              </div>
              <div className="flex justify-end">
                <button type="submit" disabled={isLoading} className="px-6 py-2.5 rounded-xl bg-[#1B4FD8] hover:bg-[#1640b0] disabled:opacity-60 text-white text-sm font-semibold transition-colors flex items-center gap-2">
                  {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="text-sm font-bold text-gray-900 mb-1">Change Password</h3>
            <p className="text-xs text-gray-400 mb-5">Enter your current password to verify, then set a new one.</p>
            {passwordSuccess && (
              <div className="mb-4 flex items-center gap-2 px-4 py-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm">
                <CheckCircle className="w-4 h-4" /> Password changed successfully.
              </div>
            )}
            {passwordError && (
              <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">{passwordError}</div>
            )}
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <PasswordField label="Current Password" value={passwords.current_password} show={showCurrent} onToggle={() => setShowCurrent((v) => !v)} onChange={(v) => setPasswords((p) => ({ ...p, current_password: v }))} />
              <PasswordField label="New Password" value={passwords.password} show={showNew} onToggle={() => setShowNew((v) => !v)} onChange={(v) => setPasswords((p) => ({ ...p, password: v }))} placeholder="Min. 8 characters" />
              <PasswordField label="Confirm New Password" value={passwords.password_confirmation} show={showConfirm} onToggle={() => setShowConfirm((v) => !v)} onChange={(v) => setPasswords((p) => ({ ...p, password_confirmation: v }))} />
              <div className="flex justify-end">
                <button type="submit" disabled={isLoading} className="px-6 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 disabled:opacity-60 text-white text-sm font-semibold transition-colors flex items-center gap-2">
                  {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", placeholder }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/20 transition" />
    </div>
  );
}

function PasswordField({ label, value, show, onToggle, onChange, placeholder }: { label: string; value: string; show: boolean; onToggle: () => void; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input type={show ? "text" : "password"} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
          className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/20 transition" />
        <button type="button" onClick={onToggle} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition">
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
