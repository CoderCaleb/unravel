"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import CardCustomizationSidebar from "@/components/feature/create/CardCustomizationsSidebar";
import { LuMenu, LuX } from "react-icons/lu";
import { useRouter } from "next/navigation";
import AnimationPreview from "@/components/feature/create/AnimationPreview";

type FontStyle = "playful" | "elegant" | "modern";

export default function Page() {
  const params = useParams();
  const templateId = params?.templateId;

  // Sidebar state
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [fontStyle, setFontStyle] = useState<FontStyle>("playful");
  const [colorTheme, setColorTheme] = useState("purple");

  // Mobile sidebar toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const router = useRouter();

  const handlePreviewShare = () => {
    console.log("Preview & Share clicked", {
      name,
      message,
      fontStyle,
      colorTheme,
    });
  };

  const handleBack = () => {
    console.log("Back clicked");
    router.push("/templates");
  };

  return (
    <div className="flex h-full overflow-hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white rounded-lg p-2 shadow-lg"
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? <LuX size={24} /> : <LuMenu size={24} />}
      </button>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <CardCustomizationSidebar
        name={name}
        message={message}
        fontStyle={fontStyle}
        colorTheme={colorTheme}
        onNameChange={setName}
        onMessageChange={setMessage}
        onFontStyleChange={setFontStyle}
        onColorChange={setColorTheme}
        onPreviewShare={handlePreviewShare}
        onBack={handleBack}
      />

      {/* Main Content */}
      <AnimationPreview
        templateId={templateId}
        fontStyle={fontStyle}
        colorTheme={colorTheme}
      />
    </div>
  );
}
