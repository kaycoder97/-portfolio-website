from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'your-secret-key'

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        print(f"Message received from {name} ({email}): {message}")
        flash("Thanks for your message! I'll get back to you soon.")
        return redirect(url_for('home'))
    return redirect(url_for('home'))

@app.route('/blog/<int:post_id>')
def blog_post(post_id):
    # Just a placeholder
    return f"Blog post #{post_id}"

@app.route('/about')
def about():
    return render_template('about.html')


if __name__ == '__main__':
    app.run()

