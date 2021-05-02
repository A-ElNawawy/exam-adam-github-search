/*
 ** getRepo Function to Fetch Data From github [ Accepts Parameters]
 ** Parameters:
 ** owner = The Owner name that will be searched
 ** repo = The repo name that will be searched
 */
async function getRepo(owner: string, repo: string) {
  let api =
    "https://api.github.com/search/repositories?q=" +
    encodeURIComponent(`repo:${owner}/${repo}`);
  return await fetch(api);
}

export { getRepo };
