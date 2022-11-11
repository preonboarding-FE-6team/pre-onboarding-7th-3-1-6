# **📖 3주차 과제 1 - Best Practice**

### **과제 : 질환명 검색시 검색어 추천** 및 API 호출 최적화

> 기간 :2022년 11월 8일(화) - 2022년 11월 11일(금)
> 

**📎[배포링크 바로가기](https://main.d4qbjz8bpbyb0.amplifyapp.com/)**

# **👨‍👩‍👧‍👦 Members**

| 최승진<br/>(팀장)                                                                                     | 임준홍<br/>(부팀장)                                                                                 | 문도연<br/>(서기)                                                                                        | 최원오<br/>(부서기)                                                                                     | 소윤호<br/>(부서기)                                                                                 | 선민경<br/>(팀원)                                                                                       | 곽현<br/>(팀원)                                                                                         | 이유진<br/>(팀원)                                                                                       |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/46988995?v=4" alt="tooooo1" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/67459853?v=4" alt="helen" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/102936206?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/99406837?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/30254570?v=4" alt="flora" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/76088728?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/73919235?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/42020919?v=4" alt="magictaro" width="60" height="60"> |
| <a href="https://github.com/yondo123">yondo123<a/>| <a href="https://github.com/tesseractjh">tesseractjh<a/> | <a href="https://github.com/Moondoyeon">Moondoyeon</a>| <a href="https://github.com/choi1five">choi1five<a/>                                                                                               | <a href="https://github.com/younhoso">younhoso<a/>                                                                                            | <a href="https://github.com/seonsy44">seonsy44<a/>                                                                                                | <a href="https://github.com/kwakhyun">kwakhyun<a/>                                                                                                | <a href="https://github.com/2ujin">2ujin<a/>                                                                                                   |

# **🖥 Demo**

![search-keyword](https://user-images.githubusercontent.com/102936206/201240156-017813ca-c9eb-4b8c-98a6-6d043f95c4f2.gif)

# **⚡️ Skills**


<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-2F74C0.svg?&style=for-the-badge&logo=TypeScript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Recoil](https://img.shields.io/badge/recoil-f26b00?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCI+PGxpbmsgeG1sbnM9IiIgdHlwZT0idGV4dC9jc3MiIGlkPSJkYXJrLW1vZGUiIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iIi8+PGcgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xNDIuNTM2IDE5OC44NThjMCAyNi4zNi0yMS4zNjggNDcuNzItNDcuNzIgNDcuNzItMjYuMzYgMC00Ny43MjItMjEuMzYtNDcuNzIyLTQ3LjcyczIxLjM2LTQ3LjcyIDQ3LjcyLTQ3LjcyYzI2LjM1NSAwIDQ3LjcyMiAyMS4zNiA0Ny43MjIgNDcuNzIiLz48cGF0aCBkPSJNNTA1LjE4IDQxNC4yMjVIMjM4LjEyNGMtMzUuMjUgMC02My45MjYtMjguNjc0LTYzLjkyNi02My45MjNzMjguNjc4LTYzLjkyNiA2My45MjYtNjMuOTI2aDEyMC43OGMyMC44MTYgMCAzNy43NTMtMTYuOTM4IDM3Ljc1My0zNy43NTZzLTE2LjkzOC0zNy43NTYtMzcuNzUzLTM3Ljc1Nkg5NC44MWMtNy4yMjcgMC0xMy4wODYtNS44Ni0xMy4wODYtMTMuMDg1IDAtNy4yMjcgNS44Ni0xMy4wODYgMTMuMDg1LTEzLjA4NmgyNjQuMDkzYzM1LjI1IDAgNjMuOTIzIDI4LjY3OCA2My45MjMgNjMuOTI2cy0yOC42NzQgNjMuOTIzLTYzLjkyMyA2My45MjNoLTEyMC43OGMtMjAuODIgMC0zNy43NTYgMTYuOTM4LTM3Ljc1NiAzNy43NiAwIDIwLjgxNiAxNi45MzggMzcuNzUzIDM3Ljc1NiAzNy43NTNINTA1LjE4YzcuMjI3IDAgMTMuMDg2IDUuODYgMTMuMDg2IDEzLjA4NSAwIDcuMjI2LTUuODU4IDEzLjA4NS0xMy4wODUgMTMuMDg1eiIvPjxwYXRoIGQ9Ik00NTcuNDY0IDQwMS4xNDJjMC0yNi4zNiAyMS4zNi00Ny43MiA0Ny43Mi00Ny43MnM0Ny43MiAyMS4zNiA0Ny43MiA0Ny43Mi0yMS4zNiA0Ny43Mi00Ny43MiA0Ny43Mi00Ny43Mi0yMS4zNi00Ny43Mi00Ny43MiIvPjwvZz48c3R5bGUgeG1sbnM9IiIgaWQ9ImRhcmstbW9kZS1jdXN0b20tY29sb3IiPgoJCTpyb290ewoJCQktLWJnLWNvbG9yOnJnYmEoMjYsMjYsMjYsMSk7CgkJCS0tdGV4dC1jb2xvcjpyZ2JhKDExMCwxMTAsMTEwLDEpOwoJCQktLWEtY29sb3I6cmdiYSg5MCwxMjAsMTIwLDEpOwoJCQktLWEtdmlzaXRlZC1jb2xvcjpyZ2JhKDEyMCwxMjAsOTAsMSk7CgkJCS0tYS1ob3Zlci1jb2xvcjpyZ2JhKDIxMSwyMTEsMjExLDEpOwoJCQktLWlucHV0LWJvcmRlci1jb2xvcjpyZ2JhKDIxMSwyMTEsMjExLDAuMik7CgkJCS0taW5wdXQtcGxhY2Vob2xkZXItY29sb3I6cmdiYSgxNzMsMjE2LDIzMCwxKTsKCQkJLS1kaWFsb2ctYmctY29sb3I6cmdiYSgzNiwzNiwzNiwwLjk1KTsKCQkJLS1iZy1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgyNiwyNiwyNiwxKSxyZ2JhKDI2LDI2LDI2LDEpKTsKCQl9Cgk8L3N0eWxlPjwvc3ZnPg==)
![axios](https://camo.githubusercontent.com/23392fa4fc3ffb6ade29cba7aaffa7741daeb97012c70a062cf2370187d6519e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6178696f732d4646434132383f7374796c653d666f722d7468652d6261646765266c6f676f3d6178696f73266c6f676f436f6c6f723d7768697465)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

</div>


# **🚀 기능요구사항**

- 아래 사이트의 검색영역을 클론하기
    
    [한국임상정보](https://clinicaltrialskorea.com/)
    
- 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
    - 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
        - 예) 사용자 입력: 담낭
              추천 검색어:  **담낭**의 악성 신생물, **담낭**염, **담낭**의 기타 질환
    - 검색어가 없을 시 “검색어 없음” 표출
- API 호출 최적화
    - API 호출별로 로컬 캐싱 구현
    - 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
- 키보드만으로 추천 검색어들로 이동 가능하도록

# 📦 파일 구조

```
📦src
 ┣ 📂api
 ┃ ┗ 📜suggestion.ts
 ┣ 📂assets
 ┃ ┗ 📂icons
 ┃ ┃ ┣ 📜magnifier.svg
 ┃ ┃ ┗ 📜xmark-solid.svg
 ┣ 📂components
 ┃ ┗ 📂SearchBar
 ┃ ┃ ┣ 📜ClearButton.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┣ 📜ParsedName.tsx
 ┃ ┃ ┣ 📜SearchButton.tsx
 ┃ ┃ ┣ 📜Suggestion.tsx
 ┃ ┃ ┣ 📜SuggestionList.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useClear.ts
 ┃ ┣ 📜useInput.ts
 ┃ ┣ 📜useKeyboard.ts
 ┃ ┣ 📜useSearchInput.ts
 ┃ ┣ 📜useSetSuggestions.ts
 ┃ ┣ 📜useSuggestionFocus.ts
 ┃ ┗ 📜useSuggestions.ts
 ┣ 📂recoil
 ┃ ┣ 📂searchBar
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📂suggestion
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂styles
 ┃ ┣ 📂theme
 ┃ ┃ ┣ 📜color.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜mixin.ts
 ┃ ┃ ┗ 📜responsive.ts
 ┃ ┗ 📜GlobalStyle.ts
 ┣ 📂types
 ┃ ┗ 📜index.d.ts
 ┣ 📂utils
 ┃ ┣ 📜debounce.ts
 ┃ ┗ 📜sortTiralData.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

# **👍 Best Practice**

## 1. Debounce

- debounce 함수를 구현하였습니다.
    - 짧은 시간 간격으로 발생하는 이벤트를 그룹화해서 마지막에 한 번만 이벤트 핸들러가 호출되도록 하였습니다.
    
    ```tsx
    // utils/debounce.ts
    const debounce = (callback: (...args: unknown[]) => void, delay: number) => {
      let timerId: NodeJS.Timeout;
      return (...args: unknown[]) => {
        if (timerId) {
          clearTimeout(timerId);
        }
        timerId = setTimeout(callback, delay, ...args);
      };
    };
    
    export default debounce;
    ```
    
    ```tsx
    // hooks/useSetSuggestions.ts
    debounce(async () => {
        await handleSuggestionChange();
      }, 300);
    }
    ```
    

## 2. API 로컬 캐싱

- 전역 상태


```tsx
// recoil/searchBar/index.ts
// Input에 입력된 검색어 atom
export const searchInputState = atom<string>({
  key: 'searchInputState',
  default: '',
});
```

```tsx
// recoil/searchBar/index.ts
// 검색어에 따른 추천 검색어 atomFamily
// 검색어를 parameter로 받아서 동적으로 atom 생성
export const suggestionState = atomFamily<Sick[] | null, string>({
  key: 'suggestionState',
  default: null,
});
```

각 검색어별로 동적으로 atom을 생성할 수 있도록 `atomFamily`를 통해 검색어별 추천 검색어 목록을 저장하였습니다.

- 로컬 캐싱 구현

```tsx
// recoil/searchBar/index.ts
type Option = {
  cacheTime: number;
};

function useSetSuggestions(option?: Option) {
  const { cacheTime = 5 * 60 * 1000 } = option ?? {};
  // useRecoilCallback으로 내부에서 Recoil 상태에 접근
  const handleSuggestionChange = useRecoilCallback(
    ({ snapshot, set, reset }) =>
      async () => {
				// 현재 검색어(searchInputState) 값 가져오기
        const inputValue = await snapshot.getPromise(searchInputState);

        // 검색어가 없으면(빈 문자열이면) API 호출 X
        if (!inputValue.trim()) {
          return;
        }

        // 현재 검색어에 대한 추천 검색어(suggestionState(inputValue)) 값 가져오기
        const prevValue = await snapshot.getPromise(suggestionState(inputValue));

				// 검색어에 대한 추천 검색어가 이미 존재한다면(호출된 적이 있다면) API 호출 X
        if (prevValue) {
          return;
        }

				// API 호출
        const { data, status, errorMsg } = await getSuggestions(inputValue);
        console.info('calling api');
        if (status >= 200 && status < 300) {
					// 추천 검색어 갱신
          set(suggestionState(inputValue), data.sort(sortTrialData(inputValue)));
					// cacheTime 이후에 추천 검색어 reset하는 Timeout 설정
					// reset하면 suggestionState(inputValue)는 기본값인 null로 변함
          setTimeout(() => reset(suggestionState(inputValue)), cacheTime);
        } else {
          alert(errorMsg.default);
        }
      },
    []
  );

  // debounce로 API 호출 횟수 최적화
  return debounce(async () => {
    await handleSuggestionChange();
  }, 300);
}
```

```tsx
// hooks/useSearchInput.ts

function useSearchInput() {
  const [inputState, setInputState] = useRecoilState(searchInputState);
  const setSuggestions = useSetSuggestions({ cacheTime: 2 * 60 * 1000 });

  // 검색어 입력 Input 컴포넌트의 onChange 이벤트 핸들러
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setInputState(value);
    setSuggestions();
  }, []);

  return { value: inputState, handleChange: handleInputChange };
}
```

- Input 컴포넌트에서 change 이벤트가 발생할 때마다 setSuggestion이 실행되며 현재 검색어에 대한 추천 검색어 목록이 존재하는지 여부를 통해 API를 호출 여부를 결정합니다. 
- 만약 API가 호출되었다면 setTimeout을 통해 cacheTime 이후에 현재 검색어에 대한 추천 검색어 목록을 초기화(null)합니다.

```tsx
// hooks/useSearchInput.ts

function useSuggestions() {
  const inputValue = useRecoilValue(searchInputState);
  const suggestionValue = useRecoilValue(suggestionState(inputValue));
  // suggestionValue를 직접 사용하지 않고 별도의 state를 만듦
  // suggestionState(inputValue)가 cacheTime이 다 되어 reset될 때 null이 됨
  // 그 때 화면에 추천 검색어가 사라지지 않고 이전 값을 계속 나타내도록 하기 위함
  const [suggestions, setSuggestions] = useState<Sick[]>([]);

  useEffect(() => {
		// suggestionValue가 null이 아닐 때에만 suggestions를 변경함
    // cacheTime이 다 되어 suggestionValue가 null이 되더라도 이전 값을 계속 보여줌
    if (suggestionValue) {
      setSuggestions(suggestionValue);
    }
  }, [suggestionValue]);

  return { inputValue, suggestions };
}
```

- cacheTime이 다 되어 reset될 때 현재 검색어에 대한 추천 검색어 목록(suggestionState(inputValue))이 null로 초기화됩니다.  
- 이 때 만약 해당 추천 검색어 목록이 화면에 표시되고 있다면 검색어 목록이 뷰에서 같이 사라지지 않도록 별도의 state를 만들어서 suggestionState(inputValue)가 null이 아닐 때에만 변경하였습니다.



> stale-while-revalidate 로직 적용을 시도한 코드 사례도 있었습니다.
로직 구현이 완성되지 않아 코드를 채택하지는 않았습니다.
<img width="507" alt="Untitled" src="https://user-images.githubusercontent.com/102936206/201242768-dd18fc11-8970-46a1-8341-f5e6169796bd.png">

```tsx
const cacheConfig: CacheConfig = {
  cache: new Map<string, Response>(),
  fetch: () => undefined,
};

const CacheContext = createContext(cacheConfig);

export const useCache = () => useContext(CacheContext);

export function CacheProvider({ children }: CacheProviderProps) {
  const fetch: CacheConfig['fetch'] = async (url, api, apiConfig, { onSuccess, onError }) => {
    // 캐싱이 되어 있는 경우 캐싱된 값을 먼저 내어주고, stale한 캐시 값을 업데이트
		if (cacheConfig.cache.has(url)) {
      onSuccess(cacheConfig.cache.get(url));

      const { data, status } = await api(apiConfig);
      if (status >= 200 && status < 300) cacheConfig.cache.set(url, data);

      return;
    }
		
		// 캐싱이 안되어 있는 경우 요청을 보냄
    const { data, status } = await api(apiConfig);
    console.info('calling api');

    if (status >= 200 && status < 300) {
      cacheConfig.cache.set(url, data);
      onSuccess(data);
    } else if (onError) {
      onError(status);
    }
  };

  return React.createElement(
    CacheContext.Provider,
    { value: { cache: cacheConfig.cache, fetch } },
    React.Children.only(children)
  );
}
```

## 3. 추천 검색어 상하 이동

- useRef를 통해 `ul` 태그를 참조합니다.
- useState를 통해 `focusIndex` 상태 관리를 합니다.
- 특정 키보드이벤트 발생시 `focusIndex`가 변하도록 합니다. (default: -1)
- `ul` > `li[focusIndex]` > `a` 태그에 focus 합니다.

```tsx
// hooks/useKeyboard.ts

import { useEffect, useState } from 'react';
import useSuggestions from './useSuggestions';

function useKeyboard(inputRef: React.RefObject<HTMLInputElement>, elRef: React.RefObject<HTMLElement>) {
  const { inputValue } = useSuggestions();
  const [focusIndex, setFocusIndex] = useState<number>(-1);
  const ANCHOR_INDEX = 0;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return;

    switch (e.key) {
      case 'Tab':
        setFocusIndex((cur) => {
          if (elRef.current?.childElementCount === cur + 1) return cur;
          e.preventDefault();
          return cur + 1;
        });
        break;

      case 'ArrowDown':
        e.preventDefault();
        setFocusIndex((cur) => {
          if (elRef.current?.childElementCount === cur + 1) return cur;
          return cur + 1;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusIndex((cur) => {
          if (cur === 0 || cur === -1) {
            inputRef.current?.focus();
            return -1;
          }
          return cur - 1;
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
		// ul > li[focusIndex] > a.focus()
    const focusedEl = elRef.current?.children[focusIndex]?.children[ANCHOR_INDEX] as HTMLElement | undefined;
    focusedEl?.focus();
  }, [focusIndex]);

  useEffect(() => {
    setFocusIndex(-1);
  }, [inputValue]);

  return { handleKeyDown };
}

export default useKeyboard;
```

```tsx
// components/SearchBar/index.tsx

function SearchBar() {
  const { searchInputRef, isFocused } = useInput();
  const suggestionListRef = useRef<HTMLUListElement>(null);
  const { handleKeyDown } = useKeyboard(searchInputRef, suggestionListRef);

  return (
    <Container>
      <Input searchInputRef={searchInputRef} />
      <SuggestionList suggestionListRef={suggestionListRef} /> {/* -> ul 태그 */}
      <ClearButton />
      <SearchButton />
    </Container>
  );
}
```

## 4. 검색어 볼드처리

- `RegExp`를 사용: 구분자도 결과에 포함한채로 `split`하여 `query`(검색키워드)와 일치할 경우 Bold 처리합니다.

```tsx
// componentx/Searchbar/ParsedName.tsx

function ParsedName({ suggestionName, query }: Props) {
  const splitList = suggestionName.split(new RegExp(`(${query})`));

  return (
    <>
      {splitList.map((word) => (
        <React.Fragment key={word}> {word === query ? <Bold>{query}</Bold> : <div>{word}</div>}</React.Fragment>
      ))}
    </>
  );
}
```

## 5. AWS Amplify를 사용하여 자동배포

- AWS에서 제공하는 Amplify를 사용하여 `Main` 브랜치에 푸시 될 때 빌드 후 자동배포 되도록 구축하였습니다.

# **📢 프로젝트 실행방법**

실행할 때 반드시 다음 파일을 최상단에 생성후 실행 해주셔야 합니다.

```jsx
// .env.local
REACT_APP_SERVER = http://localhost:4000
REACT_APP_CLINICAL_TRIALS_KOREA = https://clinicaltrialskorea.com/studies
```

```jsx
// 설치
npm install

// 실행
npm start
```

# **📚 팀 규칙**

- **📕 Git commit convention**
    
    
    | rule | 설명 |
    | --- | --- |
    | Feat | 새로운 기능 추가 |
    | Fix | 버그 고친 경우 |
    | Design | css 수정 |
    | Chore | 빌드 업무 수정, 패키지 매니저 수정 |
    | !HOTFIX | 급하게 치명적인 버그를 고쳐야하는 경우 |
    | Docs | 문서 수정 |
    | Style | 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우 |
    | Rename | 파일 및 폴더 구조 변경 |
    | Refactor | 코드 리팩토링 |
    | Test | 테스트 코드, 리팩토링 테스트 코드 추가 |
    | Remove | 파일 삭제 |
    | Modify | 코드 단순 수정 |
- **📘 Git branch strategy**
- main (배포/운영) ← develop (통합 개발) ← feat-개발내용 (단위 개발)
