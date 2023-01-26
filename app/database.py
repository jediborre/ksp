from .config import settings
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


MYSQL_DATABASE_URL = f"mysql://"\
                    f"{settings.MYSQL_USERNAME}:{settings.MYSQL_PASSWORD}@"\
                    f"{settings.MYSQL_HOSTNAME}:{settings.MYSQL_PORT}/"\
                    f"{settings.MYSQL_DB}"

Base = declarative_base()
engine = create_engine(MYSQL_DATABASE_URL)

Base.metadata.create_all(bind=engine)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
