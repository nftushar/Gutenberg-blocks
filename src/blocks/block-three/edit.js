import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit() {
    return (
        <div {...useBlockProps()}>
            <h2>{__('Block Three', 'blockxpert')}</h2>
            <p>{__('xxxxxxxxxxx This is the second example block.', 'blockxpert')}</p>
        </div>
    );
}