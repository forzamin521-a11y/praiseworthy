import { LanguageProvider } from "@/components/providers/LanguageProvider";
import HomePage from "@/components/page/HomePage";

export default function RootPage() {
  return (
    <LanguageProvider initialLocale="en">
      <HomePage locale="en" />
    </LanguageProvider>
  );
}
