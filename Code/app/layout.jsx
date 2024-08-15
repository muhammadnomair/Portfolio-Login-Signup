import { Almarai } from "next/font/google";
import { Providers } from "./providers";

import "/styles/globals.scss";

const almarai = Almarai({
  subsets: ["arabic"], // Specify the character subsets you need
  weight: ["300", "400", "700", "800"], // Include desired font weights
});

export const metadata = {
  title: {
    default: "Login Signup",
    template: "%s | Login Signup  ",
  },
  description: "Login Signup Modules",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={almarai.className}>{children}</body>
      </Providers>
    </html>
  );
}
