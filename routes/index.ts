import { defineEventHandler, html } from "h3"

export default defineEventHandler((_event) => {
  return html(`
    <meta charset="utf-8">
    <h1>This is your brand new Nitro project 🚀 </h1>
    <p>Get started by editing the <code>routes/index.ts</code> file.</p>
  `)
})
