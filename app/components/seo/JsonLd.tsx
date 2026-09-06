/**
 * Emits a JSON-LD block. Server-rendered into the HTML so crawlers that don't
 * execute JavaScript still see it.
 *
 * `<` is escaped so a stray "</script>" inside any string can't close the tag
 * early — the standard precaution when serializing JSON into a <script> body.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
