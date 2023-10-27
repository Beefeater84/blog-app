export default function toSlug(title: string): string {
  // Создаем новую переменную для обработанного значения
  let slug = title.toLowerCase();
  slug = slug.replace(/\s+|\W+|_/g, "-");
  slug = slug.replace(/-+/g, "-");
  slug = slug.replace(/^-+|-+$/g, "");

  return slug;
}
