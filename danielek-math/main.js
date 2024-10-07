'use strict';

const obsidian = require('obsidian');

class MathMarkdownPlugin extends obsidian.Plugin {

    onload() {
        console.log('Loading MathMarkdownPlugin...');

        // Register the right-click context menu option
        this.registerEvent(
            this.app.workspace.on('editor-menu', (menu, editor) => {

                menu.addItem((item) => {
                    item.setTitle('Danielek Math');

                    // Create the submenu
                    const subMenu = new obsidian.Menu();

                    // Add submenu items under "Danielek Math"
                    subMenu.addItem((subItem) => {
                        subItem.setTitle('Insert Fraction')
                            .onClick(() => {
                                console.log('Insert Fraction clicked');  // Debugging line
                                this.insertMath(editor, '\\frac{x}{y}');
                            });
                    });

                    subMenu.addItem((subItem) => {
                        subItem.setTitle('Insert Summation')
                            .onClick(() => {
                                console.log('Insert Summation clicked');  // Debugging line
                                this.insertMath(editor, '\\sum_{i=1}^{n} x_i');
                            });
                    });

                    subMenu.addItem((subItem) => {
                        subItem.setTitle('Insert Integral')
                            .onClick(() => {
                                console.log('Insert Integral clicked');  // Debugging line
                                this.insertMath(editor, '\\int_{a}^{b} f(x) dx');
                            });
                    });

                    subMenu.addItem((subItem) => {
                        subItem.setTitle('Insert Derivative')
                            .onClick(() => {
                                console.log('Insert Derivative clicked');  // Debugging line
                                this.insertMath(editor, '\\frac{d}{dx} f(x)');
                            });
                    });

                    // Set the submenu to the item
                    item.setSubmenu(subMenu);
                    console.log('Submenu set');  // Debugging line

                    // Optionally move the item to the top
                    // menu.moveItem(item, 2); // Uncomment if needed
                });
            })
        );
    }

    // Helper function to insert LaTeX at the cursor's position
    insertMath(editor, mathSnippet) {
        const cursor = editor.getCursor();
        console.log(`Inserting math: ${mathSnippet} at cursor: ${cursor}`);  // Debugging line
        editor.replaceRange(`$${mathSnippet}$`, cursor);
    }

    onunload() {
        console.log('Unloading MathMarkdownPlugin...');
    }
}

module.exports = MathMarkdownPlugin;
