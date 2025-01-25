"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Signin() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-zinc-100">
      <div className="flex min-h-screen">
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="w-full max-w-[400px] space-y-6">
            <div className="space-y-2">
              <h1 className="text-[32px] font-semibold text-zinc-900">Sign In</h1>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-zinc-500">New to Unkey?</span>
                <Link href="#" className="text-zinc-900 hover:text-zinc-700 transition-colors">
                  Create new account
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-white hover:bg-zinc-50 text-zinc-800 h-11 px-4 rounded-md border border-zinc-300 flex items-center justify-center space-x-2 transition-colors shadow-sm">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
                <span>GitHub</span>
              </button>

              <button className="w-full bg-white hover:bg-zinc-50 text-zinc-800 h-11 px-4 rounded-md border border-zinc-300 flex items-center justify-center space-x-2 transition-colors shadow-sm">
                <svg className="size-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="ml-2">Google</span>
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-300" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-2 text-zinc-500">or continue using email</span>
                </div>
              </div>

              <Input
                type="email"
                placeholder="name@example.com"
                className="h-11 bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-zinc-500"
              />

              <Button className="w-full h-11 bg-zinc-900 text-white hover:bg-zinc-800 shadow-md">
                Sign In with Email
              </Button>
            </div>

            <p className="text-[13px] text-zinc-500">
              By continuing, you agree to Upcord{" "}
              <Link href="#" className="text-zinc-700 hover:text-zinc-900 transition-colors">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-zinc-700 hover:text-zinc-900 transition-colors">
                Privacy Policy
              </Link>
              , and to receive periodic emails with updates.
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-8 bg-gradient-to-br from-zinc-100 to-zinc-200">
          <div className="max-w-md">
            <blockquote className="space-y-4">
              <p className="text-[32px] leading-tight text-zinc-900">
                Just used Unkey, by far the{" "}
                <span className="bg-gradient-to-r from-zinc-600 to-zinc-900 bg-clip-text text-transparent">
                  easiest and cheapest (it is free)
                </span>{" "}
                solution I have used so far for saas to manage their api keys. Its{" "}
                <span className="bg-gradient-to-r from-zinc-600 to-zinc-900 bg-clip-text text-transparent">
                  amazing
                </span>{" "}
                how easy it is use.
              </p>
              <footer className="flex items-center space-x-3">
                <div className="text-zinc-900 font-medium">Tanmay</div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

