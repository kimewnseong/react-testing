import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import SummaryForm from '../SummaryForm';

test('Initial conditions', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });

  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

test('체크박스 첫 클릭 시 버튼 활성화 및 두번 클릭 시 버튼 비활성', async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });

  await user.click(checkbox);
  expect(confirmButton).toBeEnabled();

  await user.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

test('마우스 커서를 올리면 팝오버 호출', async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);
  // 보이지 않는 요소를 테스트할 경우 getBy를 사용해서는 안됨
  // 팝오버가 감춰졌을 때
  const nullPopOver = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopOver).not.toBeInTheDocument();

  // 체크박스 라벨에 마우스가 올라갔을 때
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // 마우스가 떠났을 때
  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
