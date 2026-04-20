"use client";

import { VoicePreviewPlaceholder } from "@/features/dashboard/components/voice-preview-placeholder";
import { TextInputPanel } from "@/features/text-to-speech/components/text-input-panel";
import { SettingsPanel } from "@/features/text-to-speech/components/settings-panel";
import {
  TextToSpeechForm,
  defaultTTSValues,
} from "@/features/text-to-speech/components/text-to-speech-form";

export function TextToSpeechView() {
  return (
    <TextToSpeechForm defaultValues={defaultTTSValues}>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col">
          <TextInputPanel />
          <VoicePreviewPlaceholder />
        </div>
        <SettingsPanel />
      </div>
    </TextToSpeechForm>
  );
}
