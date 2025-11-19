# Base image (slim version to reduce size)
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Copy requirements first for caching
COPY requirements.txt .

# Install dependencies without cache
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Expose FastAPI port
EXPOSE 8000

# Environment variable for NewsAPI
ENV NEWS_API_KEY=fb00544f0b7d4599b07450249837823d

# Command to run FastAPI server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
