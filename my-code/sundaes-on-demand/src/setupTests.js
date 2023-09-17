// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { server } from './mocks/server.js';
// 테스트 하기 전에 항상 서버가 수신을 대기하도록 함
// 들어오는 모든 네트워크 요청을 실제 네트워크가 아닌 MSW로 라우팅한다는 의미
beforeAll(() => server.listen());

// 각 테스트가 끝나면 핸들러를 서버를 정의했을 때의 핸들러로 재설정
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// 테스트가 끝나면 서버를 닫음
afterAll(() => server.close());
