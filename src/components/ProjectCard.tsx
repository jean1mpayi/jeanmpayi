"use client";

import { useMemo, useState } from "react";
import {
  AvatarGroup,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

function generateProjectFallback(title: string) {
  const safeTitle = (title || "Projet")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#0b1020"/>
          <stop offset="48%" stop-color="#151d33"/>
          <stop offset="100%" stop-color="#1a1a2e"/>
        </linearGradient>
        <linearGradient id="accent" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stop-color="#4cc9f0"/>
          <stop offset="100%" stop-color="#8b5cf6"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#bg)"/>
      <circle cx="1260" cy="220" r="220" fill="rgba(76,201,240,0.12)"/>
      <circle cx="350" cy="760" r="260" fill="rgba(139,92,246,0.10)"/>
      <rect x="110" y="110" width="520" height="10" rx="5" fill="url(#accent)" opacity="0.9"/>
      <rect x="110" y="150" width="270" height="10" rx="5" fill="#dfe7ff" opacity="0.28"/>
      <text x="110" y="430" fill="#F8FAFC" font-family="Arial, Helvetica, sans-serif" font-size="74" font-weight="700">${safeTitle}</text>
      <text x="110" y="510" fill="#CBD5E1" font-family="Arial, Helvetica, sans-serif" font-size="26" letter-spacing="4">PORTFOLIO PROJECT</text>
      <rect x="110" y="590" width="220" height="58" rx="29" fill="url(#accent)" opacity="0.9"/>
      <text x="150" y="628" fill="#0b1020" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700">IMAGE MANQUANTE</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  const primaryImage = useMemo(
    () => images[0] || generateProjectFallback(title),
    [images, title],
  );
  const [imageSrc, setImageSrc] = useState(primaryImage);

  const handleImageError = () => {
    setImageSrc(generateProjectFallback(title));
  };

  return (
    <Column fillWidth gap="m">
      <div
        style={{
          width: "100%",
          borderRadius: "1rem",
          overflow: "hidden",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          onError={handleImageError}
          style={{
            width: "100%",
            height: "460px",
            objectFit: "cover",
            display: "block",
            background: "rgba(15, 23, 42, 0.8)",
          }}
        />
      </div>
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && (
              <AvatarGroup avatars={avatars} size="m" reverse />
            )}
            {description?.trim() && (
              <Text
                wrap="balance"
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Voir l'étude de cas</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">Voir le projet</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
