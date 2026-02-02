const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

describe('Customer Count Widget', () => {
  let dom;
  let window;
  let document;

  beforeEach(() => {
    // Read the HTML file
    const html = fs.readFileSync(
      path.join(__dirname, '../index.html'),
      'utf8'
    );

    // Create a JSDOM instance
    dom = new JSDOM(html, {
      runScripts: 'dangerously',
      resources: 'usable',
      url: 'http://localhost'
    });

    window = dom.window;
    document = window.document;
  });

  afterEach(() => {
    dom.window.close();
  });

  test('should have a card element', () => {
    const card = document.querySelector('.card');
    expect(card).not.toBeNull();
  });

  test('should have a count element with initial value', () => {
    const count = document.getElementById('count');
    expect(count).not.toBeNull();
    expect(count.textContent).toBe('--');
  });

  test('should have a label element', () => {
    const label = document.querySelector('.label');
    expect(label).not.toBeNull();
    expect(label.textContent).toBe('จำนวนลูกค้าทั้งหมด');
  });

  test('should have correct CSS classes', () => {
    const card = document.querySelector('.card');
    const number = document.querySelector('.number');
    const label = document.querySelector('.label');

    expect(card).not.toBeNull();
    expect(number).not.toBeNull();
    expect(label).not.toBeNull();
  });

  test('should contain a script tag for fetching data', () => {
    const scripts = document.getElementsByTagName('script');
    expect(scripts.length).toBeGreaterThan(0);
    
    let foundFetch = false;
    for (let script of scripts) {
      if (script.textContent.includes('fetch')) {
        foundFetch = true;
        break;
      }
    }
    expect(foundFetch).toBe(true);
  });

  test('should have proper document structure', () => {
    expect(document.doctype).not.toBeNull();
    expect(document.documentElement.tagName).toBe('HTML');
    
    const head = document.querySelector('head');
    const body = document.querySelector('body');
    
    expect(head).not.toBeNull();
    expect(body).not.toBeNull();
  });

  test('should have meta charset UTF-8', () => {
    const metaCharset = document.querySelector('meta[charset]');
    expect(metaCharset).not.toBeNull();
    expect(metaCharset.getAttribute('charset')).toBe('UTF-8');
  });

  test('should have title element', () => {
    const title = document.querySelector('title');
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('Customer Count');
  });
});
