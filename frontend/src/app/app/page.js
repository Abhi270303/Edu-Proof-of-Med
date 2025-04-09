import React from "react";
import { UserCircle, Stethoscope } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const LoginSelection = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/20 dark:to-background">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col min-h-screen px-4">
        {/* Header */}
        <div className="flex items-center justify-between max-w-6xl mx-auto w-full py-8">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-orange-600 rounded-lg grid place-items-center">
              <img src={"/icons/bolt.svg"} className="h-5 invert" alt="bolt icon" />
            </div>
            <span className="text-xl font-semibold">SecureRx</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center -mt-20">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-16 space-y-2">
              <h1 className={`${montserrat.className} text-4xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent`}>Welcome to SecureRx</h1>
              <p className="text-muted-foreground text-lg">Choose your login type to continue</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Doctor Card */}
              <Card className="group relative overflow-hidden border-2 hover:border-orange-600/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-transparent dark:from-orange-950/20" />
                <div className="relative p-8">
                  <div className="flex flex-col h-full gap-6">
                    <div className="h-12 w-12 bg-orange-600 rounded-lg grid place-items-center">
                      <Stethoscope className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h2 className="text-2xl font-semibold">Doctor Portal</h2>
                      <p className="text-muted-foreground">
                        Securely manage prescriptions and access your medical practice dashboard
                      </p>
                    </div>
                    <Button 
                      className="w-full bg-orange-600 hover:bg-orange-700" 
                      size="lg"
                      asChild
                    >
                      <Link href="/app/doctor">
                        Login as Doctor
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Patient Card */}
              <Card className="group relative overflow-hidden border-2 hover:border-orange-600/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-transparent dark:from-orange-950/20" />
                <div className="relative p-8">
                  <div className="flex flex-col h-full gap-6">
                    <div className="h-12 w-12 bg-orange-600 rounded-lg grid place-items-center">
                      <UserCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h2 className="text-2xl font-semibold">Patient Portal</h2>
                      <p className="text-muted-foreground">
                        View your prescriptions and manage your healthcare information
                      </p>
                    </div>
                    <Button 
                      className="w-full bg-orange-600 hover:bg-orange-700" 
                      size="lg"
                      asChild
                    >
                      <Link href="/app/patient">
                        Login as Patient
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen p-4">
        {/* Mobile Header */}
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-orange-600 rounded-lg grid place-items-center">
              <img src={"/icons/bolt.svg"} className="h-4 invert" alt="bolt icon" />
            </div>
            <span className="text-lg font-semibold">SecureRx</span>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="mt-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className={`${montserrat.className} text-2xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent`}>Welcome to SecureRx</h1>
            <p className="text-muted-foreground">Choose your login type to continue</p>
          </div>

          <div className="space-y-4 mt-8">
            {/* Doctor Card */}
            <Card className="relative overflow-hidden border-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-transparent dark:from-orange-950/20" />
              <div className="relative p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-10 w-10 bg-orange-600 rounded-lg grid place-items-center shrink-0">
                    <Stethoscope className="h-5 w-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold">Doctor Portal</h2>
                    <p className="text-muted-foreground text-sm">
                      Securely manage prescriptions and access your dashboard
                    </p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  asChild
                >
                  <Link href="/app/doctor">
                    Login as Doctor
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Patient Card */}
            <Card className="relative overflow-hidden border-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-transparent dark:from-orange-950/20" />
              <div className="relative p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-10 w-10 bg-orange-600 rounded-lg grid place-items-center shrink-0">
                    <UserCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold">Patient Portal</h2>
                    <p className="text-muted-foreground text-sm">
                      View prescriptions and manage your information
                    </p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  asChild
                >
                  <Link href="/app/patient">
                    Login as Patient
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSelection;