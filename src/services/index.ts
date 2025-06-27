async function fetchProjectData(
  projectName: string
): Promise<SlidesDataModel> {
  const response = await fetch(
    `https://katerinasemenova.ru/path/to/script.php?project=${encodeURIComponent(
      projectName
    )}`
  );
  if (!response.ok) {
    throw new Error(
      `Ошибка загрузки данных: ${response.statusText}`
    );
  }
  return response.json();
}

export default function scrollToSide(direction: string) {
  if (typeof window === 'undefined') return;
  switch (direction) {
    case 'top':
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      break;

    case 'bottom':
      window.scrollTo({
        top: document.body.scrollHeight + 600,
        behavior: 'smooth',
      });
      break;
  }
}
