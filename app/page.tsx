"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Shield, FileText, Lock, ArrowRight } from "lucide-react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
    const router = useRouter();
    const { data, error, isLoading } = useSWR("/api/policy", fetcher);

    return (
        <main className="relative min-h-screen bg-gradient-to-br from-[#fdfbf7] to-[#f5f1e8] dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-start py-12 px-6 selection:bg-amber-500/30 font-sans text-slate-900">
            {/* Animated Background Elements - Simplified matching login page */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
            </div>

            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center pt-12">
                {/* Logo Section - Matching Login Page */}
                {/* Institutional Branding - Top Center */}
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="flex items-center gap-6 bg-[#fdfaf6]/90 dark:bg-slate-800/90 backdrop-blur-md rounded-3xl px-8 py-4 shadow-2xl border border-[#e6dcc8]/20 group hover:scale-[1.02] transition-all duration-500">
                        <div className="w-16 h-16 p-1">
                            <img
                                src="/vignan-logo-custom.svg"
                                alt="Vignan Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight font-sans">
                                Vignan Institute of Technology and Science
                            </h2>
                        </div>
                    </div>
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent mb-6">
                    IT Services Asset Management
                </h1>

                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
                    Advanced infrastructure orchestration and digital asset tracking.
                    Streamline institutional operations with intelligent service management.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => router.push("/login")}
                        className="group px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <span>Enter Management Portal</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Policy Section - Cleaned Up */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full mt-12 mb-16"
                >
                    <div className="w-full bg-[#fdfaf6]/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#e6dcc8]/40 dark:border-slate-700/50 relative overflow-hidden">
                        <div className="relative z-10 flex flex-col gap-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#fdfaf6] dark:bg-slate-700 p-3 rounded-2xl shadow-sm border border-[#e6dcc8]/50 dark:border-slate-600">
                                        <Shield className="w-6 h-6 text-amber-700 dark:text-amber-400" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Institutional IT Policy</h2>
                                </div>
                                <div className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                    Governance & Security
                                </div>
                            </div>

                            {isLoading ? (
                                <div className="space-y-4 pt-4">
                                    <div className="h-4 bg-slate-200/50 dark:bg-slate-700/50 rounded w-full animate-pulse"></div>
                                    <div className="h-4 bg-slate-200/50 dark:bg-slate-700/50 rounded w-5/6 animate-pulse"></div>
                                    <div className="h-4 bg-slate-200/50 dark:bg-slate-700/50 rounded w-4/6 animate-pulse"></div>
                                </div>
                            ) : error || data?.error ? (
                                <div className="p-6 bg-red-50/50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-2xl flex items-start text-red-600 dark:text-red-400">
                                    <Lock className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm font-medium">Policy orchestration currently unavailable. Please verify manually.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 gap-6">
                                    {data?.policy?.map((paragraph: string, idx: number) => (
                                        <p key={idx} className="text-slate-600 dark:text-slate-400 leading-relaxed text-base tracking-tight text-justify bg-white/20 dark:bg-slate-900/20 p-6 rounded-2xl border border-white/20 dark:border-slate-700/30">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Decorative Background Icon */}
                        <FileText className="absolute -right-12 -bottom-12 w-64 h-64 text-slate-500/5 pointer-events-none rotate-12" />
                    </div>
                </motion.div>

                {/* Secure Footer Badge */}
                <div className="pb-12">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#fdfaf6]/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-full border border-[#fdfaf6] dark:border-slate-700 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                            Secure Authentication • Role-Based Access Control
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        </main >
    );
}
