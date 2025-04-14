import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit() {
    return (
        <div {...useBlockProps()}>
            <h2>{__('Block One', 'gutenberg-blocks')}</h2>
            <p>{__('This is the first example block.', 'gutenberg-blocks')}</p>
        </div>
    );
}