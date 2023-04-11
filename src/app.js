export default function characterHealth(data) {
  return (data.health > 50) ? 'healthy'
    : (data.health >= 15) ? 'wounded' : 'critical';
}
