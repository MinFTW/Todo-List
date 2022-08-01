export function selectOnFocus(node: HTMLInputElement) {
  if (node && typeof node.select === 'function') {
    const onFocus = () => node.select();
    node.addEventListener('focus', onFocus);
    return {
      destroy: () => node.removeEventListener('focus', onFocus),
    };
  }
}
