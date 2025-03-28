export function scrollToAnchor(anchorId: string) {
  const anchorElement = document.getElementById(anchorId);

  if (anchorElement) {
    anchorElement.scrollIntoView({ behavior: 'smooth' });
  }
}


type HashParams = { [index: string]: string | null }

export const getHashParams = () => {
  const { href, origin } = window.location;
  const url = new URL(href, origin);

  if (!url.hash) {
    return {};
  }

  const hashParams: HashParams = {};
  const hashes = url.hash.slice(1).split('&');

  hashes.forEach(item => {
    const [key, value] = item.split('=');
    if (key) {
      hashParams[key] = value ? decodeURIComponent(value) : null;
    }
  });

  return hashParams;
};

