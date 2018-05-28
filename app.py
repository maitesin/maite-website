from flask import Flask, request, g, render_template, redirect, url_for, abort
from flask_babel import Babel

app = Flask(__name__)
babel = Babel(app)

@app.before_request
def before():
    if request.view_args and 'lang_code' in request.view_args:
        if request.view_args['lang_code'] in ['es', 'ca', 'en']:
            g.current_lang = request.view_args['lang_code']
            request.view_args.pop('lang_code')
        else:
            return abort(404)

@babel.localeselector
def get_locale():
    return g.get('current_lang', 'en')

@app.route('/<lang_code>')
def index():
    return render_template('index.html')

@app.route('/')
def root():
    return redirect(url_for('index', lang_code='en'))

@app.route('/privacy_notice')
def privacy():
    return render_template('privacy.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0')
