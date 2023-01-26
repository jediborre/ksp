from pydantic import BaseSettings


class Settings(BaseSettings):
    MYSQL_PASSWORD: str
    MYSQL_USERNAME: str
    MYSQL_PORT: int
    MYSQL_DB: str
    MYSQL_HOSTNAME: str

    class Config:
        env_file = './.env'


settings = Settings()
