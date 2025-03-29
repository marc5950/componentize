// utils/api.js
const API_URL = "https://kea-alt-del.dk/t7/api";

export async function getCategories() {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) {
    throw new Error("Fejl ved hentning af kategorier");
  }
  return response.json();
}

export async function getSubcategories() {
  const response = await fetch(`${API_URL}/subcategories`);
  if (!response.ok) {
    throw new Error("Fejl ved hentning af underkategorier");
  }
  return response.json();
}

export async function getSeasons() {
  const response = await fetch(`${API_URL}/seasons`);
  if (!response.ok) {
    throw new Error("Fejl ved hentning af sæsoner");
  }
  return response.json();
}

export async function getProductsByCategory(category) {
  const response = await fetch(`${API_URL}/products?category=${category}`);
  if (!response.ok) {
    throw new Error(`Fejl ved hentning af produkter for kategori: ${category}`);
  }
  return response.json();
}

export async function getProductsBySubcategory(subcategory) {
  const response = await fetch(
    `${API_URL}/products?subcategory=${subcategory}`,
  );
  if (!response.ok) {
    throw new Error(
      `Fejl ved hentning af produkter for underkategori: ${subcategory}`,
    );
  }
  return response.json();
}

export async function getProductsBySeason(season) {
  const response = await fetch(`${API_URL}/products?season=${season}`);
  if (!response.ok) {
    throw new Error(`Fejl ved hentning af produkter for sæson: ${season}`);
  }
  return response.json();
}

export async function getProductById(id) {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Fejl ved hentning af produkt med ID: ${id}`);
  }
  return response.json();
}

export async function getAllProducts() {
  const response = await fetch(`${API_URL}/products?limit=1000`);
  if (!response.ok) {
    throw new Error("Fejl ved hentning af alle produkter");
  }
  return response.json();
}
