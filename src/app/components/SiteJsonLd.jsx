import JsonLd from "./JsonLd";
import { buildPersonJsonLd, buildWebSiteJsonLd } from "../../lib/seo";

export default function SiteJsonLd() {
  return (
    <>
      <JsonLd data={buildPersonJsonLd()} />
      <JsonLd data={buildWebSiteJsonLd()} />
    </>
  );
}
