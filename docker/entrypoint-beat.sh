#!/bin/sh

set -e

celery -A config beat --loglevel=debug --scheduler django_celery_beat.schedulers:DatabaseScheduler
