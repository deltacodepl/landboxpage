#!/bin/sh

set -e

celery -A config worker --loglevel=debug --concurrency=4
