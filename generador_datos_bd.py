from faker import Faker
from faker.providers import internet

fake = Faker('es_MX')
fake.add_provider(internet)
for _ in range(1000):
    reg = [
        'default.png',
        f'{fake.name()}',
        f'{fake.job()}',
        f'{fake.random_int(5000, 60000)}',
        f'{"Activo" if fake.boolean() else "Inactivo"}',
        f'{fake.year()}-{fake.month()}-{fake.day_of_month()}'
    ]
    print('\t'.join(reg))
