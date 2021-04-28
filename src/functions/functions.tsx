/*
 ** getData Function to Fetch Data From github [ Accepts Parameters]
 ** Parameters:
 ** repoName = The repo name that will be searched
 */
async function getData(repoName: string, pageNo: number) {
  let api =
    "https://api.github.com/search/repositories?q=" +
    repoName +
    "&page=" +
    pageNo +
    "&per_page=10" +
    "&sort=stars&order=desc";

  return await fetch(api);
}

export { getData };
