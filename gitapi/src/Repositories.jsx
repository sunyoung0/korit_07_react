import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Repositories() {
  const getRepositories = async () => {
    const response = await axios.get(
      "https://api.github.com/search/repositories?q=korit_07"
    );
    return response.data.items;
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: ["repositories"],
    queryFn: getRepositories,
    staleTime: 60 * 1000, // 1분을 의미
  });

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }

  if (isError) {
    // 로딩을 성공하고 에러가 날 수도 있기 때문에 else if 가 아니라 별개의 조건문으로 작성
    return <h1>오류가 발생했습니다... </h1>;
  } else {
    // error 거나 성공이거나 이기 때문에 else씀
    return (
      <table>
        <tbody>
          {data.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.full_name}</td>
              <td>
                <a href={repo.html_url}>{repo.html_url}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Repositories;
