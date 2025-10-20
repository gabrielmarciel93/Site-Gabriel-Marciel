/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const _data = new Map<string, ResourceRequest>([
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "Gabriel Marciel | Analista e Suporte de TI em Nova Iguaçu | WordPress & Infraestrutura",
    description: "Gabriel Marciel é analista de TI em Nova Iguaçu especializado em suporte técnico, configuração de rede, infraestrutura e desenvolvimento de sites WordPress para micro e pequenas empresas.",
    excludePageFromSearch: false,
    language: "pt-BR",
    socialImageAssetName: undefined,
    socialImageUrl: undefined,
    status: undefined,
    redirect: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "gabriel.marciel93@gmail.com";
    