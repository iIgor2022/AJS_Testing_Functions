import characterHealth from '../app';

test('Character health test', () => {
  expect(characterHealth({ name: 'Маг', health: 90 })).toBe('healthy');
  expect(characterHealth({ name: 'Маг', health: 40 })).toBe('wounded');
  expect(characterHealth({ name: 'Маг', health: 10 })).toBe('critical');
});

test.each([
  { name: 'Маг', health: 90, expected: 'healthy' },
  { name: 'Маг', health: 40, expected: 'wounded' },
  { name: 'Маг', health: 10, expected: 'critical' },
])
('Testing function characterHealth with name $characterName health $healthCharacter', ({ characterName, healthCharacter, expected }) => {
  const result = characterHealth({ name: characterName, health: healthCharacter });
  expect(result).toBe(expected);
});
