# 📌 renderToString 송곳

## 개요

SSR은 서버에서 완성한 HTML을 브라우저에 전달하고, 브라우저에서 인터렉션 요소를 붙여 앱을 완성하는 방식이다. `<App />`을 SSR로 표시한다고 가정해보자. 같은 App을 전달하지만 서버와 브라우저의 처리 방식은 다르다. 서버는 App을 정적인 HTML 형태로 만든다. 브라우저는 App의 정보를 가지고 이미 정적인 HTML 형태에 상호작용 요소를 추가한다.

리액트에선 SSR을 지원하기 위해 renderToString라는 함수가 있다. renderToString은 서버 입장에서 App을 처리하기 위해 사용하는 함수로, ReactNode로 선언된 App을 string 형태의 HTML으로 만든다. 이렇게만 보면 renderToString이 ReactNode를 전송하게 좋은 형태인 string으로 바꾸는 함수구나~ 하고 넘어갈 수 있다. **하지만 ReactNode의 모든 정보를 HTML로 전송하고 있을까?** 실제로 ReactNode를 renderToString에 넣으면 모든 기능이 HTML로 변환되지 않는다.

그렇다면 renderToString은 string 형태의 HTML을 만들기 위해 App의 정보 중 어떤 것을 거를까?
