import { profileData } from "../data/profileData";

export const profileName = profileData.name;
export const profileTitle = profileData.title;
export const profileTag = profileData.tag;

export const siteUrl = profileData.site;

export const siteTitle = `${profileName}, ${profileTitle}`;

export const siteDescription = `Página pessoal de ${profileName}, ${profileTitle} especialista em automação de testes e qualidade de software.`;

export const siteKeywords = profileData.keywords.flatMap(
  (group) => group.words
);
