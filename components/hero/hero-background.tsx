import clsx from "clsx"
import SoftAurora from "@/components/ui/SoftAurora"

type HeroBackgroundProps = {
  className?: string
}

export default function HeroBackground({ className }: HeroBackgroundProps) {
  return (
    <SoftAurora
      speed={0.6}
      scale={1.5}
      brightness={0.8}
      color1="#f7f7f7"
      color2="#00d492"
      noiseFrequency={2.5}
      noiseAmplitude={1}
      bandHeight={0.5}
      bandSpread={1}
      octaveDecay={0.1}
      layerOffset={0}
      colorSpeed={1}
      enableMouseInteraction
      mouseInfluence={0.25}
      className={clsx(
        "opacity-50 md:opacity-55",
        "mask-[radial-gradient(92%_72%_at_50%_38%,#000_18%,transparent_72%)]",
        "md:mask-[radial-gradient(60%_80%_at_76%_48%,#000_28%,transparent_72%)]",
        className
      )}
    />
  )
}
