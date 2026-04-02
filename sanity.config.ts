/**
 * Sanity Studio configuration
 *
 * This file will be used once you run:
 *   npx sanity@latest init
 *   npm install sanity @sanity/vision
 *
 * Then uncomment and configure below.
 */

// import { defineConfig } from "sanity";
// import { structureTool } from "sanity/structure";
// import { visionTool } from "@sanity/vision";
// import { schemaTypes } from "./src/sanity/schema";
//
// export default defineConfig({
//   name: "vitra-nagoya",
//   title: "RESTAURANT VITRA NAGOYA",
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
//   basePath: "/studio",
//   plugins: [
//     structureTool({
//       structure: (S) =>
//         S.list()
//           .title("VITRA NAGOYA CMS")
//           .items([
//             S.listItem()
//               .title("イベント / Events")
//               .schemaType("event")
//               .child(S.documentTypeList("event")),
//             S.listItem()
//               .title("メニュー / Menu Courses")
//               .schemaType("menuCourse")
//               .child(S.documentTypeList("menuCourse")),
//             S.listItem()
//               .title("ワイン / Wine List")
//               .schemaType("wine")
//               .child(S.documentTypeList("wine")),
//             S.listItem()
//               .title("オファー / Offers")
//               .schemaType("offer")
//               .child(S.documentTypeList("offer")),
//           ]),
//     }),
//     visionTool(),
//   ],
//   schema: {
//     types: schemaTypes,
//   },
// });

export {};
