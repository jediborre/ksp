from pydantic import BaseSettings


class Settings(BaseSettings):
    DATABASE_PORT: int
    MYSQL_PASSWORD: str
    MYSQL_USER: str
    MYSQL_DB: str
    MYSQL_HOST: str
    MYSQL_HOSTNAME: str

    class Config:
        env_file = './.env'


settings = Settings()
