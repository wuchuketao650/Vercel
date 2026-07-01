import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ChipSpecsSection } from "@/components/sections/ChipSpecsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <ChipSpecsSection />
      <CTASection />
    </>
  );
}
