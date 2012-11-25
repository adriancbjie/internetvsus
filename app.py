from flask import Flask
from flask import render_template
import urllib2
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route("/", methods=['GET'])
def index():
	# soup = BeautifulSoup(urllib2.urlopen('http://www.yahoo.com').read()
	# import ipdb; ipdb.set_trace();
	return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)