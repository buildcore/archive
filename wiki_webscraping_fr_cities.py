#!/usr/bin/env python
# coding: utf-8

# https://github.com/yg2619/Wikipedia-Web-Scraping-Top-US-Cities/blob/master/Wikipedia%20Web%20Scraping%20Top%20US%20Cities.py

import requests
from bs4 import BeautifulSoup
import pandas as pd
import re

# Retrieve data

def get_page(url):
  response = requests.get(url)
  try:
    if response.status_code == 200:
      return response
    else:
      return None
  except RequestExecption as e:
    print('Requests Failed: '+str(e))
