import { useEffect } from "react";

// document.title은 index.html 파일의 title을 의미
// title의 값이 바뀔때마다 재대입이 일어남
function useTitle(title) {
  useEffect(() => { document.title = title;}, [title])
}

export default useTitle;