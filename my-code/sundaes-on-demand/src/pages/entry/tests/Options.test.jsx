import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('각 scoop옵션의 이미지가 표시되는가', async () => {
  render(<Options optionType="scoops" />);

  // 이미지 찾기
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // 이미지의 alt 텍스트 확인
  const altText = scoopImages.map((el) => el.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('각 topping옵션의 이미지가 표시되는가', async () => {
  render(<Options optionType="toppings" />);

  // 이미지 찾기
  const toppingImages = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  // 이미지의 alt 텍스트 확인
  const altText = toppingImages.map((el) => el.alt);
  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ]);
});
