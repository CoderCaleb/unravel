"use client";

import TitleText from "@/components/ui/TitleText";
import SubtitleText from "@/components/ui/SubtitleText";
import TemplateGrid from "@/components/feature/templates/TemplateGrid";
import ButtonWithIcon from "@/components/ui/ButtonWithIcon";
import { LuArrowRight } from "react-icons/lu";
import { useState } from "react";
import Link from "next/link";
import ScrollArea from "@/components/ui/ScrollArea";

export default function TemplatesPage() {
  const templates = [
    {
      id: "1",
      title: "Fortune cookie 1",
      thumbnail: "https://i.imgur.com/EvJNDuV.png",
      previewAnimation: "https://i.imgur.com/a9kToEL.mp4",
    },
    {
      id: "2",
      title: "Fortune cookie 2",
      thumbnail: "https://i.imgur.com/EvJNDuV.png",
      previewAnimation: "https://i.imgur.com/a9kToEL.mp4",
    },
    {
      id: "3",
      title: "Fortune cookie 3",
      thumbnail: "https://i.imgur.com/EvJNDuV.png",
      previewAnimation: "https://i.imgur.com/a9kToEL.mp4",
    },
  ];

  const [templateSelectedId, setTemplateSelectedId] = useState<string | null>(
    null,
  );

  const handleSelectCard = (templateId: string) => {
    setTemplateSelectedId(templateId);
  };

  const handleContinue = () => {
    if (!templateSelectedId) return;
    console.log("Continue with template:", templateSelectedId);
    // Add your navigation or action logic here
  };

  return (
    <ScrollArea
      className="flex flex-col items-center bg-background"
      onClick={() => setTemplateSelectedId(null)}
    >
      {/* Title */}
      <TitleText variant="title" className="text-center mb-2">
        Choose Your Template
      </TitleText>

      {/* Subtitle */}
      <SubtitleText variant="medium" className="text-center mb-8">
        Pick a starting style — you can customize everything later
      </SubtitleText>

      {/* Template Cards Grid */}
      <TemplateGrid
        templates={templates}
        templateSelectedId={templateSelectedId}
        handleSelectCard={handleSelectCard}
      />

      {/* Continue Button */}
      {templateSelectedId && (
        <Link href={`/create/${templateSelectedId}`}>
          <ButtonWithIcon
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            onClick={handleContinue}
          >
            <span>Continue</span>
            <LuArrowRight size={20} />
          </ButtonWithIcon>
        </Link>
      )}
    </ScrollArea>
  );
}
