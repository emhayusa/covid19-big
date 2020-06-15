import click
import http.server
import socketserver
import os

PORT = 1316

def welcome():
	"""Simple program that greets welcome."""
	click.echo('Welcome to Covid19!')
	run_server()
	
def run_server():
	Handler = http.server.SimpleHTTPRequestHandler
	with socketserver.TCPServer(("", PORT), Handler) as httpd:
		#web_dir = os.path.join(os.getcwd(), 'web')
		web_dir = os.path.join(os.path.dirname(__file__), 'web')
		os.chdir(web_dir)
		print("serving at port: ", PORT)
		print("serving from directory: ",web_dir)
		print("open: http://localhost:{}".format(PORT))
		print("close your browser and use control-C to stop this server")
		httpd.serve_forever()

if __name__ == '__main__':
    welcome()