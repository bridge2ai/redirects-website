// DO NOT EDIT OR FORMAT. GENERATED AUTOMATICALLY FROM PRIVATE REDIRECTS REPO.
const list = "";

const from = window.location.pathname.slice(1);
const to = JSON.parse(window.atob(list)).find((item) => item?.from === from)?.to;

if (from && to) {
  console.log(`Redirecting from ${from} to ${to}`);
  window.location.href = to;
}
