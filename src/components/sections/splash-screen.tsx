import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SplashScreenProps {
  onEnter: () => void;
}

export function SplashScreen({ onEnter }: SplashScreenProps) {
  return (
    <div className="fixed inset-0 z-50">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="https://github.com/OpalBridgeAi/Uploads/raw/refs/heads/main/Gen-3%20Alpha%20Turbo%202817495426,%20Happily%20walking%20and%20,%20LilQRUmWalkingpng%20(,%20M%205.mp4"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-6xl font-bold text-white text-shadow md:text-8xl">
              $KNEAD
            </h1>
            <p className="text-xl text-white/90 md:text-2xl">
              Pull up, Hop Out, Made Bread Look Sexy
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Button
              size="lg"
              onClick={onEnter}
              className="group bg-[#F5BC55] text-background hover:bg-[#F5BC55]/90"
            >
              Enter Breadverse
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}