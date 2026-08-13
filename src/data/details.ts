/**
 * Lookup helpers for the rich, page-specific content in
 * service-details.a.ts / service-details.b.ts / location-details.ts.
 */
import type { LocationDetail, ServiceDetail } from "./detail-types";
import { serviceDetailsA } from "./service-details.a";
import { serviceDetailsB } from "./service-details.b";
import { locationDetails } from "./location-details";

export const serviceDetails: ServiceDetail[] = [...serviceDetailsA, ...serviceDetailsB];

export const getServiceDetail = (slug: string) => serviceDetails.find((d) => d.slug === slug);
export const getLocationDetail = (slug: string): LocationDetail | undefined =>
  locationDetails.find((d) => d.slug === slug);
